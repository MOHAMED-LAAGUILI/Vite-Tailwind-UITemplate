
import { useState, useRef } from "react"
import { Camera, CheckCircle, Eye, EyeOff } from "lucide-react"

export default function RegistrationForm() {
  const [step, setStep] = useState(1)
  const [image, setImage] = useState("https://i.pravatar.cc/300")
  const [password, setPassword] = useState("")
  const [togglePassword, setTogglePassword] = useState(false)
  const [passwordStrengthText, setPasswordStrengthText] = useState("")
  const [gender, setGender] = useState("Male")
  const [firstname, setFirstname] = useState("")
  const [email, setEmail] = useState("")
  const [profession, setProfession] = useState("")
  const fileInputRef = useRef(null)

  const checkPasswordStrength = (value) => {
    const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/
    const mediumRegex = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/

    if (strongRegex.test(value)) {
      setPasswordStrengthText("Strong password")
    } else if (mediumRegex.test(value)) {
      setPasswordStrengthText("Could be stronger")
    } else {
      setPasswordStrengthText("Too weak")
    }
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
    checkPasswordStrength(e.target.value)
  }

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        if (e.target?.result) {
          setImage(e.target.result)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const handleBrowsePhoto = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-10">
        {step === "complete" ? (
          <div className="bg-white rounded-lg p-10 flex items-center shadow justify-between">
            <div className="w-full">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-12 w-12 text-green-500" />
              </div>

              <h2 className="text-2xl mb-4 text-gray-800 text-center font-bold">Registration Success</h2>

              <div className="text-gray-600 mb-8 text-center">
                Thank you. We have sent you an email to demo@demo.test. Please click the link in the message to activate
                your account.
              </div>

              <button
                onClick={() => setStep(1)}
                className="w-40 block mx-auto focus:outline-none py-2 px-5 rounded-lg shadow-sm text-center text-gray-600 bg-white hover:bg-gray-100 font-medium border"
              >
                Back to home
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Top Navigation */}
            <div className="border-b-2 py-4">
              <div className="uppercase tracking-wide text-xs font-bold text-gray-500 mb-1 leading-tight">
                {`Step: ${step} of 3`}
              </div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  {step === 1 && <div className="text-lg font-bold text-gray-700 leading-tight">Your Profile</div>}

                  {step === 2 && <div className="text-lg font-bold text-gray-700 leading-tight">Your Password</div>}

                  {step === 3 && (
                    <div className="text-lg font-bold text-gray-700 leading-tight">Tell me about yourself</div>
                  )}
                </div>

                <div className="flex items-center md:w-64">
                  <div className="w-full bg-white rounded-full mr-2">
                    <div
                      className="rounded-full bg-green-500 text-xs leading-none h-2 text-center text-white"
                      style={{ width: `${Math.floor((step / 3) * 100)}%` }}
                    ></div>
                  </div>
                  <div className="text-xs w-10 text-gray-600">{`${Math.floor((step / 3) * 100)}%`}</div>
                </div>
              </div>
            </div>
            {/* /Top Navigation */}

            {/* Step Content */}
            <div className="py-10">
              {step === 1 && (
                <>
                  <div className="mb-5 text-center">
                    <div className="mx-auto w-32 h-32 mb-2 border rounded-full relative bg-gray-100 mb-4 shadow-sm overflow-hidden">
                      
                      <img
                        id="image"
                        className="object-cover w-full h-32 rounded-full"
                        src={image || "/placeholder.svg"}
                        alt="Profile"
                      />
                    </div>

                    <label
                      htmlFor="fileInput"
                      className="cursor-pointer inline-flex justify-between items-center focus:outline-none border py-2 px-4 rounded-lg shadow-sm text-left text-gray-600 bg-white hover:bg-gray-100 font-medium"
                      onClick={handleBrowsePhoto}
                    >
                      <Camera className="w-4 h-4 mr-2" />
                      Browse Photo
                    </label>

                    <div className="mx-auto w-48 text-gray-500 text-xs text-center mt-1">
                      Click to add profile picture
                    </div>

                    <input
                      name="photo"
                      id="fileInput"
                      accept="image/*"
                      className="hidden"
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                    />
                  </div>

                  <div className="mb-5">
                    <label htmlFor="firstname" className="font-bold mb-1 text-gray-700 block">
                      Firstname
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600 font-medium border"
                      placeholder="Enter your firstname..."
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                    />
                  </div>

                  <div className="mb-5">
                    <label htmlFor="email" className="font-bold mb-1 text-gray-700 block">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600 font-medium border"
                      placeholder="Enter your email address..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </>
              )}

              {step === 2 && (
                <div className="mb-5">
                  <label htmlFor="password" className="font-bold mb-1 text-gray-700 block">
                    Set up password
                  </label>
                  <div className="text-gray-600 mt-2 mb-4">
                    Please create a secure password including the following criteria below.
                    <ul className="list-disc text-sm ml-4 mt-2">
                      <li>lowercase letters</li>
                      <li>numbers</li>
                      <li>capital letters</li>
                      <li>special characters</li>
                    </ul>
                  </div>

                  <div className="relative">
                    <input
                      type={togglePassword ? "text" : "password"}
                      className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600 font-medium border"
                      placeholder="Your strong password..."
                      value={password}
                      onChange={handlePasswordChange}
                    />

                    <div
                      className="absolute right-0 bottom-0 top-0 px-3 py-3 cursor-pointer"
                      onClick={() => setTogglePassword(!togglePassword)}
                    >
                      {togglePassword ? (
                        <EyeOff className="h-5 w-5 text-gray-500" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-500" />
                      )}
                    </div>
                  </div>

                  <div className="flex items-center mt-4 h-3">
                    <div className="w-2/3 flex justify-between h-2">
                      <div
                        className={`h-2 rounded-full mr-1 w-1/3 ${
                          passwordStrengthText === "Too weak" ||
                          passwordStrengthText === "Could be stronger" ||
                          passwordStrengthText === "Strong password"
                            ? "bg-red-400"
                            : "bg-gray-300"
                        }`}
                      ></div>
                      <div
                        className={`h-2 rounded-full mr-1 w-1/3 ${
                          passwordStrengthText === "Could be stronger" || passwordStrengthText === "Strong password"
                            ? "bg-orange-400"
                            : "bg-gray-300"
                        }`}
                      ></div>
                      <div
                        className={`h-2 rounded-full w-1/3 ${
                          passwordStrengthText === "Strong password" ? "bg-green-400" : "bg-gray-300"
                        }`}
                      ></div>
                    </div>
                    <div className="text-gray-500 font-medium text-sm ml-3 leading-none">{passwordStrengthText}</div>
                  </div>

                  <p className="mt-5 text-gray-600">
                    Inspired from dribbble shot: Exploration for a password strength meter by{" "}
                    <a href="https://dribbble.com/OvertonGraphics" className="text-blue-500">
                      Josh Overton
                    </a>
                    .
                  </p>
                </div>
              )}

              {step === 3 && (
                <>
                  <div className="mb-5">
                    <label htmlFor="gender" className="font-bold mb-1 text-gray-700 block">
                      Gender
                    </label>

                    <div className="flex flex-wrap">
                      <label className="flex justify-start items-center text-truncate rounded-lg bg-white pl-4 pr-6 py-3 shadow-sm mr-4 mb-2">
                        <div className="text-teal-600 mr-3">
                          <input
                            type="radio"
                            value="Male"
                            checked={gender === "Male"}
                            onChange={() => setGender("Male")}
                            className="form-radio focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div className="select-none text-gray-700">Male</div>
                      </label>

                      <label className="flex justify-start items-center text-truncate rounded-lg bg-white pl-4 pr-6 py-3 shadow-sm">
                        <div className="text-teal-600 mr-3">
                          <input
                            type="radio"
                            value="Female"
                            checked={gender === "Female"}
                            onChange={() => setGender("Female")}
                            className="form-radio focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div className="select-none text-gray-700">Female</div>
                      </label>
                    </div>
                  </div>

                  <div className="mb-5">
                    <label htmlFor="profession" className="font-bold mb-1 text-gray-700 block">
                      Profession
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600 font-medium border"
                      placeholder="eg. Web Developer"
                      value={profession}
                      onChange={(e) => setProfession(e.target.value)}
                    />
                  </div>
                </>
              )}
            </div>
            {/* / Step Content */}
          </>
        )}
      </div>

      {/* Bottom Navigation */}
      {step !== "complete" && (
        <div className=" py-5 bg-white shadow-md">
          <div className="max-w-3xl mx-auto px-4">
            <div className="flex justify-between">
              <div className="w-1/2">
                {step > 1 && (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="w-32 focus:outline-none py-2 px-5 rounded-lg shadow-sm text-center text-gray-600 bg-white hover:bg-gray-100 font-medium border"
                  >
                    Previous
                  </button>
                )}
              </div>

              <div className="w-1/2 text-right">
                {step < 3 ? (
                  <button
                    onClick={() => setStep(step + 1)}
                    className="w-32 focus:outline-none border border-transparent py-2 px-5 rounded-lg shadow-sm text-center text-white bg-blue-500 hover:bg-blue-600 font-medium"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    onClick={() => setStep("complete")}
                    className="w-32 focus:outline-none border border-transparent py-2 px-5 rounded-lg shadow-sm text-center text-white bg-blue-500 hover:bg-blue-600 font-medium"
                  >
                    Complete
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      
    </div>
  )
}

