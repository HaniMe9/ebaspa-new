import MembershipRequirements from "@/components/membership/MembershipRequirements"
import Image from "next/image"

export const metadata = {
  title: "Membership Requirements - EBASPA",
  description: "Learn about EBASPA membership requirements, application process, and necessary documentation for joining our network.",
}

export default function MembershipRequirementsPage() {
  return (
    <div className="pt-20">
      <div className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <div className="text-center flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Membership Requirements
              </h1>
              <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
                Learn about the requirements and process for joining EBASPA's network of 
                qualified business development service providers.
              </p>
            </div>
            <a 
              href="https://ethiobds.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 ml-8 hover:opacity-90 transition-opacity"
            >
              <Image
                src="/ethiobds.png"
                alt="ethiobds.org"
                width={180}
                height={60}
                className="rounded-lg"
              />
            </a>
          </div>
        </div>
      </div>
      
      <div className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          <MembershipRequirements />
          
          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-gray-600 mb-6">
                If you meet the requirements and are ready to join EBASPA, start your 
                application process now.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/membership/join" className="btn-primary">
                  Apply for Membership
                </a>
                <a href="/contact" className="btn-outline">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
