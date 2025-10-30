import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function OfficeContactSection() {
  return (
    <div className="w-full bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Abudhabi Office */}
          <div className="bg-gradient-to-br from-emerald-900 to-emerald-950 rounded-2xl p-8 text-white shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-px bg-white"></div>
              <h3 className="text-xl font-semibold">Our Office</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Abudhabi, UAE</h4>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    Al A&apos;sam St, Al Nahyan, Abudhabi- 27553
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sharjah Office */}
          <div className="bg-gradient-to-br from-emerald-900 to-emerald-950 rounded-2xl p-8 text-white shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-px bg-white"></div>
              <h3 className="text-xl font-semibold">Our Office</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Sharjah</h4>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    Al Majaz Jamal Abdul Nasser, Street
                    <br />
                    Ground Floor (G-1), Sharjah
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-br from-emerald-900 to-emerald-950 rounded-2xl p-8 text-white shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-px bg-white"></div>
              <h3 className="text-xl font-semibold">Contact</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a
                  href="tel:+97102551475"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  +971 02 551 4475
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a
                  href="tel:+97154996341"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  +971 54 996 4341
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a
                  href="mailto:info@smoothmanpower.com"
                  className="text-gray-200 hover:text-white transition-colors break-all"
                >
                  info@smoothmanpower.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
