import { motion } from 'framer-motion'
import Testimonials1 from '../Components/TestimonialSection/Testimonials1'
import { Star } from 'lucide-react'

export default function TestimonialsPage() {
  return (
    <>
      <Testimonials1 motion={motion} Star={Star}/>

    </>
  )
}
