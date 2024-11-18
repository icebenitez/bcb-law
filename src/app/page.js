import Button from "@/components/button";
import { servicesArr, teamArr } from "@/lib/constants";

export default function LegalCounselLandingPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <div className="flex h-full grow flex-col">
        <main className="flex flex-1 justify-center px-4 py-5 sm:px-40">
          <div className="flex max-w-[960px] flex-1 flex-col">
            <div className="container">
              <div className="flex flex-col gap-6 px-4 py-10 sm:gap-8 lg:flex-row">
                <div
                  className="aspect-video w-full rounded-lg bg-cover bg-center bg-no-repeat sm:h-auto sm:min-w-[400px] lg:w-full"
                  style={{
                    backgroundImage:
                      'url("https://cdn.usegalileo.ai/sdxl10/f168f80a-2bf6-421b-b665-ac1b11036627.png")',
                  }}
                ></div>
                <div className="flex flex-col gap-6 sm:min-w-[400px] sm:gap-8 lg:justify-center">
                  <div className="flex flex-col gap-2 text-left">
                    <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-[#111418] sm:text-5xl">
                      Personalized legal counsel for your business
                    </h1>
                    <h2 className="text-sm font-normal leading-normal text-[#111418] sm:text-base">
                      Get legal advice from experienced attorneys who understand
                      the needs of fast-growth technology companies - all for a
                      fixed price.
                    </h2>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button>Book a call</Button>
                    <button className="flex h-10 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-[#f0f2f4] px-4 text-sm font-bold leading-normal tracking-[0.015em] text-[#111418] sm:h-12 sm:px-5 sm:text-base">
                      <span className="truncate">Learn more</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="container flex flex-col gap-10 px-4 py-10"
              id="services"
            >
              <div className="flex flex-col gap-4">
                <h2 className="text-[32px] font-bold leading-tight tracking-light text-[#111418] sm:text-4xl sm:font-black sm:leading-tight sm:tracking-[-0.033em] max-w-[720px]">
                  How we can help
                </h2>
                <p className="text-base font-normal leading-normal text-[#111418] max-w-[720px]">
                  We work with technology companies at all stages, from
                  formation to exit, and provide practical legal advice on a
                  wide range of matters. Our goal is to help you navigate
                  complex legal issues, minimize risk, and achieve your business
                  objectives.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {servicesArr.map((item, index) => (
                  <div key={index} className="flex flex-col gap-3 pb-3">
                    <div
                      className="aspect-video w-full rounded-lg bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url("${item.image}")` }}
                    ></div>
                    <div>
                      <p className="text-base font-medium leading-normal text-[#111418]">
                        {item.title}
                      </p>
                      <p className="text-sm font-normal leading-normal text-[#637588]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <h2
              className="px-4 pb-3 pt-5 text-[22px] font-bold leading-tight tracking-[-0.015em] text-[#111418]"
              id="team"
            >
              Meet our team
            </h2>
            <div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3">
              {teamArr.map((member, index) => (
                <div key={index} className="flex flex-col gap-3 pb-3">
                  <div
                    className="aspect-square w-full rounded-lg bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url("${member.image}")` }}
                  ></div>
                  <div>
                    <p className="text-base font-medium leading-normal text-[#111418]">
                      {member.name}
                    </p>
                    <p className="text-sm font-normal leading-normal text-[#637588]">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="container">
              <div className="flex flex-col justify-end gap-6 px-4 py-10 sm:gap-8 sm:px-10 sm:py-20">
                <div className="flex flex-col gap-2 text-center">
                  <h2 className="text-[32px] font-bold leading-tight tracking-light text-[#111418] sm:text-4xl sm:font-black sm:leading-tight sm:tracking-[-0.033em] max-w-[720px] mx-auto">
                    Stay informed on the latest legal developments
                  </h2>
                  <p className="text-base font-normal leading-normal text-[#111418] max-w-[720px] mx-auto">
                    Explore our blog for articles, guides, and other resources
                    on topics such as fundraising, intellectual property, and
                    corporate governance.
                  </p>
                </div>
                <div className="flex flex-1 justify-center">
                  <Button>Read the blog</Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
