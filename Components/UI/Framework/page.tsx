import Image from "next/image";

const Frameworks_logo_arr = [
    [ {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [
        {},
        {},
        { src: "/Frameworks/1.svg" },
        { src: "/Frameworks/2.svg" },
        { src: "/Frameworks/3.svg" },
        { src: "/Frameworks/4.svg" },
        { src: "/Frameworks/5.svg" },
        { src: "/Frameworks/6.svg" },
        { src: "/Frameworks/7.svg" },
        { src: "/Frameworks/8.svg" },
        {},
        {},
    ],
    [
        {},
        {},
        { src: "/Frameworks/9.svg" },
        { src: "/Frameworks/10.svg" },
        { src: "/Frameworks/11.svg" },
        { src: "/Frameworks/12.svg" },
        { src: "/Frameworks/13.svg" },
        { src: "/Frameworks/14.svg" },
        { src: "/Frameworks/15.svg" },
        { src: "/Frameworks/16.svg" },
        {},
        {},
        {}
    ],
    [{}, {}, {}, {}, { src: "/Frameworks/17.svg" }, { src: "/Frameworks/18.svg" }, { src: "/Frameworks/19.svg" }, { src: "/Frameworks/20.svg" }, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
];



export default function FrameworkPage() {
  return (
      <div className="feature-section relative pb-16">
        <div className="text-center mb-8 w-1/2 m-auto z-10">
          <h2 className="">Powering your favorite<br />frameworks and tools</h2>
        </div>
         <div className=" radialClass">
        {
                  Frameworks_logo_arr.flatMap((logo, index) => {       
                    if (index === 1 || index === 2) {
                      return (
                        <div key={index} className={`flex *:ml-4 mb-4 ${index === 2 ? " -ml-[47px] " : ""}`}>
                          {logo.map((logoItem, logoIndex) => {
                            if (logoIndex > 1 && logoIndex < 10) {
                              return (
                                <div key={`${index}-${logoIndex}`} className="experienceLogo2">
                              <Image src={logoItem.src ?? ""} width={40} height={40} alt={`Logo ${index + 1}-${logoIndex}`} />
                            </div>
                          );
                        }
                        return <div key={`${index}-${logoIndex}`} className="blankLogo2"></div>;
                      })}
                    </div>
                    );
                } 
                else if (index === 3) {
                      return (
                        <div key={index} className="flex *:ml-4 mb-4">
                          {logo.map((logoItem, logoIndex) => {
                            if (logoIndex > 3 && logoIndex < 8) {
                              return (
                                <div key={`${index}-${logoIndex}`} className="experienceLogo2">
                              <Image src={logoItem.src ?? ""} width={40} height={40} alt={`Logo ${index + 1}-${logoIndex}`} />
                            </div>
                          );
                        }
                        return <div key={`${index}-${logoIndex}`} className="blankLogo2"></div>;
                      })}
                    </div>
                    );
                    }
                    else {
                      return (
                        <div key={index} className="flex *:ml-4 mb-4 -ml-[47px]">
                          {logo.map((logoItem, logoIndex) => {
                            return (
                              <div key={`${index}-${logoIndex}`} className="blankLogo2"></div>
                            );
                          })}
                        </div>
                      );
                    }
                  })}
                 

                  </div>
    </div>
  );
}
