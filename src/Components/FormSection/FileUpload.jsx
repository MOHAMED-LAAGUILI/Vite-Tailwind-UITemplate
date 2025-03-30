/* eslint-disable react/prop-types */
"use client"

import { useState, useRef, useCallback } from "react"
import { X, Upload, File, AlertCircle } from 'lucide-react'
import { twMerge } from "tailwind-merge"


export default function FileUpload({
  label,
  accept = ".pdf,.png,.jpg,.jpeg",
  required = false,
  errorMessage = "Please upload a file",
  maxSizeMB = 5,
  onChange,
  className,
}) {
  const [file, setFile] = useState(null)
  const [error, setError] = useState(required ? errorMessage : "")
  const [isDragging, setIsDragging] = useState(false)
  const [preview, setPreview] = useState(null)
  const fileInputRef = useRef(null)

  const maxSizeBytes = maxSizeMB * 1024 * 1024

  const handleFile = useCallback(
    (selectedFile) => {
      if (!selectedFile) {
        setFile(null)
        setPreview(null)
        setError(required ? errorMessage : "")
        onChange?.(null)
        return
      }

      // Validate file size
      if (selectedFile.size > maxSizeBytes) {
        setError(`File size exceeds ${maxSizeMB}MB limit`)
        return
      }

      // Validate file type
      const fileType = selectedFile.type
      const acceptedTypes = accept.split(",").map((type) => {
        return type.startsWith(".") ? type.substring(1) : type
      })

      const isAccepted = acceptedTypes.some((type) => {
        if (type.includes("*")) {
          return fileType.startsWith(type.replace("*", ""))
        }
        return fileType.includes(type) || selectedFile.name.endsWith(type)
      })

      if (!isAccepted) {
        setError(`File type not supported. Please upload ${accept}`)
        return
      }

      setFile(selectedFile)
      setError("")
      onChange?.(selectedFile)

      // Create preview for images
      if (fileType.startsWith("image/")) {
        const reader = new FileReader()
        reader.onload = (e) => {
          setPreview(e.target?.result)
        }
        reader.readAsDataURL(selectedFile)
      } else {
        setPreview(null)
      }
    },
    [accept, errorMessage, maxSizeBytes, maxSizeMB, onChange, required]
  )

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0] || null
    handleFile(selectedFile)
  }

  const handleDragEnter = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)

    const droppedFile = e.dataTransfer.files?.[0] || null
    handleFile(droppedFile)
  }

  const handleRemoveFile = () => {
    setFile(null)
    setPreview(null)
    setError(required ? errorMessage : "")
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
    onChange?.(null)
  }

  const handleBrowseClick = () => {
    fileInputRef.current?.click()
  }

  // Get file extension for icon display
  const getFileExtension = (filename) => {
    return filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2)
  }

  // Format file size
  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + " B"
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB"
    else return (bytes / 1048576).toFixed(1) + " MB"
  }

  return (
    <div className={twMerge("w-full", className)}>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </span>
        {file && (
          <span className="text-xs text-gray-500">{formatFileSize(file.size)}</span>
        )}
      </div>

      <div
        className={twMerge(
          "relative rounded-lg border-2 border-dashed transition-all duration-200",
          isDragging
            ? "border-primary bg-primary/5"
            : error
            ? "border-red-300 bg-red-50"
            : file
            ? "border-green-300 bg-green-50"
            : "border-gray-300 bg-gray-50 hover:bg-gray-100",
          "focus-within:ring-2 focus-within:ring-primary focus-within:ring-opacity-50"
        )}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {file ? (
          <div className="p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-white shadow-sm">
                {preview ? (
                  <div className="relative h-10 w-10 overflow-hidden rounded">
                    <img
                      src={preview || "/placeholder.svg"}
                      alt={file.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center">
                    <File className="h-6 w-6 text-gray-400" />
                    <span className="mt-1 text-[10px] uppercase text-gray-500">
                      {getFileExtension(file.name)}
                    </span>
                  </div>
                )}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <p className="truncate text-sm font-medium text-gray-900">
                    {file.name}
                  </p>
                  <button
                    type="button"
                    onClick={handleRemoveFile}
                    className="ml-2 rounded-full p-1 text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-700"
                    aria-label="Remove file"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <p className="text-xs text-gray-500">
                  {new Date(file.lastModified).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center p-6">
            <div
              className={twMerge(
                "mb-3 rounded-full p-2",
                isDragging ? "bg-primary/10 text-primary" : "bg-gray-100 text-gray-400"
              )}
            >
              <Upload
                className={twMerge(
                  "h-6 w-6 transition-transform",
                  isDragging && "animate-bounce"
                )}
              />
            </div>
            <p className="mb-1 text-sm font-medium text-gray-700">
              {isDragging ? "Drop your file here" : "Drag and drop your file here"}
            </p>
            <p className="mb-3 text-xs text-gray-500">
              or{" "}
              <button
                type="button"
                className="font-medium text-primary hover:underline focus:outline-none"
                onClick={handleBrowseClick}
              >
                browse
              </button>{" "}
              from your computer
            </p>
            <p className="text-xs text-gray-400">
              Accepted formats: {accept}
              {maxSizeMB && ` (Max: ${maxSizeMB}MB)`}
            </p>
          </div>
        )}

        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          accept={accept}
          onChange={handleFileChange}
          aria-invalid={!!error}
          aria-describedby={error ? `${label}-error` : undefined}
        />
      </div>

      {error && (
        <div
          className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500"
          id={`${label}-error`}
        >
          <AlertCircle className="h-3.5 w-3.5" />
          <span>{error}</span>
        </div>
      )}
    </div>
  )
}
