import Image from 'next/image';

export default function CommunityPage() {

    const community_arr = [
  {
    "name": "Ryan Carniato",
    "handle": "@RyanCarniato",
    "src": "/Community/1.jpg",
    "description": "I&apos;m loving what Rake enables. We&apos;ve found building SolidStart that it is less a metaframework but a system of symbiotic Rake plugins."
  },
  {
    "name": "Rich Harris",
    "handle": "@Rich_Harris",
    "src": "/Community/2.jpg",
    "description": "Rake is basically the united nations of JavaScript at this point. I&apos;ll be there as a representative of Sveltelandia"
  },
  {
    "name": "David East",
    "handle": "@_davideast",
    "src": "/Community/3.jpeg",
    "description": "Each and every time I use Rake, I feel a true sense of pure and unbridled joy."
  },
  {
    "name": "Mark Dalgleish",
    "handle": "@markdalgleish",
    "src": "/Community/4.jpeg",
    "description": "It’s also a great platform to build a framework on since it provides a pluggable dev environment. Community is amazing too."
  },
  {
    "name": "Jason Miller",
    "handle": "@_developit",
    "src": "/Community/5.jpeg",
    "description": "Every time I suspect I&apos;ve hit the bounds of what Rake can do, I end up being wrong."
  },
  {
    "name": "David Cramer",
    "handle": "@zeeg",
    "src": "/Community/6.jpg",
    "description": "Rake has been a game changer for the industry."
  },
  {
    "name": "Dion Almaer",
    "handle": "@dalmaer",
    "src": "/Community/7.jpg",
    "description": "I am so excited to see so many great frameworks teaming up on top of rake. So many will benefit. ❤️ to the rake team."
  },
  {
    "name": "Christoph Nakazawa",
    "handle": "@cpojer",
    "src": "/Community/8.jpg",
    "description": "Rake is gonna eat the (JavaScript) world."
  },
  {
    "name": "Nikolaj",
    "handle": "@lopugit",
    "src": "/Community/9.jpg",
    "description": "Wow, wow, wow, wow, wow, wow, Rake is..... Rake is.... Wow"
  }
];

    return (
        <div className='pb-8'>
            <div className='text-center mb-12 w-1/2 m-auto z-10'>
                <h2 className=" text-white">Loved by the community</h2>
                <h3 className="text-lg text-[#a3a3a3]">Don&apos;t take our word for it - listen to what<br /> Rake community members have to say.</h3>                
          </div>
            <div className='m-[40px_auto] w-[80%] mt-8 columns-3'>
                {community_arr.map((member) => (
                    <div key={member.handle} className='community-card w-full break-inside-avoid mb-4 rounded-xl border border-[rgba(38,38,38,.7)] bg-[#161616] p-6 flex flex-col gap-3'>
                        <div className='card-header flex flex-row gap-5 items-center'>
                            <Image src={member.src} alt={member.name} className='rounded-full' width={40} height={40} />
                            <div className='card-meta flex flex-col'>
                                <p className='card-name text-white'>{member.name}</p>
                                <p className='card-handle text-[#a3a3a3]'>{member.handle}</p>
                            </div>
                        </div>
                        <div className='card-content'>
                            <p className='text-[#a3a3a3]'>{member.description}</p>
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    );
}