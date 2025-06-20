import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SlidingDiv } from "@/components/custom/SlidingDiv"

const Navbar = () => {
  return (
    <SlidingDiv direction="top" px={50} className="flex gap-6 justify-between items-center">
      <div className="flex gap-6 items-center backdrop-blur-md">
        <img src={'/logo.png'} className="h-8" />
        <h1 className="font-bold text-white text-3xl">Hinter<span className="text-primary">B<span className="font-medium">uilder</span></span></h1>
      </div>
      <div className="bg-gradient-to-br from-white/5 to-white/20 flex gap-12 px-6 rounded-xl text-sm font-semibold p-1 border border-white/20 backdrop-blur-md">
        <p className="flex-1">Services</p>
        <p className="flex-1">Products</p>
        <p className="flex-1">Automations</p>
      </div>
      <div className="flex gap-4 items-center backdrop-blur-md">
        <div className="relative">
          <Input placeholder="Search" className="bg-gradient-to-br from-white/5 to-white/20 border border-white/20 backdrop-blur-md placeholder:text-white/25"/>
          <svg className="h-full absolute right-0 top-0 p-2 text-white/25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"/><circle cx="11" cy="11" r="8"/></g></svg> 
        </div>
        <Button size={"sm"} className="text-sm font-bold drop-shadow-white/20 drop-shadow-md">{"Let's Chat"}</Button>
      </div>
    </SlidingDiv>
  )
}

export const Hero = () => {
  return (
    <div className="min-h-screen relative flex flex-col text-white bg-gradient-to-r from-dark to-primary/70">
      <div className="absolute inset-0 bg-grid">
        <div className="absolute inset-12 flex flex-col gap-32">
          <Navbar />
          <div className="flex justify-between gap-4 drop-shadow-md">
            <SlidingDiv direction="left" px={70} className="flex flex-1 flex-col gap-12">
              <div className="flex flex-col font-bold text-7xl min-[1600px]:text-8xl">
                <h2>In World of</h2>
                <h2 className="text-primary">AI Development</h2>
              </div>
              <p className="text-4xl">{"We've got you covered"}</p>
              <p className="font-light text-2xl max-w-xl">{"HinterBuild has the team to create and manage your GenAI Applications"}</p>
              <div className="flex mt-4 gap-8 items-center">
                <Button className="font-bold w-56 h-12 text-lg ">Contact Now</Button>
                <Button className="font-bold w-56 h-12 text-lg" variant={"secondary"}>Services</Button>
              </div>
            </SlidingDiv>
            <div className="flex flex-col flex-1 gap-4">
              <SlidingDiv direction="right" px={70} className="h-52 flex gap-4">
                <div className="flex-[3_0_0] flex flex-col gap-2 justify-center items-center rounded-2xl bg-gradient-to-br from-white/5 to-white/20 border border-white/20 backdrop-blur-md">
                  <svg className="size-16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 5a3 3 0 1 0-5.997.125a4 4 0 0 0-2.526 5.77a4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M9 13a4.5 4.5 0 0 0 3-4M6.003 5.125A3 3 0 0 0 6.401 6.5m-2.924 4.396a4 4 0 0 1 .585-.396M6 18a4 4 0 0 1-1.967-.516M12 13h4m-4 5h6a2 2 0 0 1 2 2v1M12 8h8m-4 0V5a2 2 0 0 1 2-2"/><circle cx="16" cy="13" r=".5"/><circle cx="18" cy="3" r=".5"/><circle cx="20" cy="21" r=".5"/><circle cx="20" cy="8" r=".5"/></g></svg>
                  <p className="font-bold">AI Automation</p>
                </div>
                <div className="flex-[2_0_0] flex flex-col gap-2 justify-center items-center rounded-2xl bg-gradient-to-br from-white/5 to-white/20 border border-white/20 backdrop-blur-md">
                  <svg className="size-16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0m1 7v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></g></svg>
                  <p className="font-bold">Fast Deployment</p>
                </div>
              </SlidingDiv>
              <SlidingDiv direction="right" px={70} delay={0.1} className="h-52 flex gap-4">
                <div className="flex-1 flex flex-col gap-2 justify-center items-center rounded-2xl bg-gradient-to-br from-white/5 to-white/20 border border-white/20 backdrop-blur-md">
                  <svg className="size-16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="16" r="1"/><rect width="18" height="12" x="3" y="10" rx="2"/><path d="M7 10V7a5 5 0 0 1 10 0v3"/></g></svg>
                  <p className="font-bold">Secure Systems</p>
                </div>
              </SlidingDiv>
              <SlidingDiv direction="right" px={70} delay={0.2} className="h-52 flex gap-4">
                <div className="flex-[3_0_0] flex flex-col gap-2 justify-center items-center rounded-2xl bg-gradient-to-br from-white/5 to-white/20 border border-white/20 backdrop-blur-md">
                  <svg className="size-16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"/></g></svg>
                  <p className="font-bold">Global Reach</p>
                </div>
                <div className="flex-[2_0_0] flex flex-col gap-2 justify-center items-center rounded-2xl bg-gradient-to-br from-white/5 to-white/20 border border-white/20 backdrop-blur-md">
                  <svg className="size-16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 5a3 3 0 1 0-5.997.125a4 4 0 0 0-2.526 5.77a4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125a4 4 0 0 1 2.526 5.77a4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4a4.5 4.5 0 0 1-3 4m8.599-6.5a3 3 0 0 0 .399-1.375m-11.995 0A3 3 0 0 0 6.401 6.5m-2.924 4.396a4 4 0 0 1 .585-.396m15.876 0a4 4 0 0 1 .585.396M6 18a4 4 0 0 1-1.967-.516m15.934 0A4 4 0 0 1 18 18"/></g></svg>
                  <p className="font-bold">Smart Solutions</p>
                </div>
                <div className="flex-[2_0_0] flex flex-col gap-2 justify-center items-center rounded-2xl bg-gradient-to-br from-white/5 to-white/20 border border-white/20 backdrop-blur-md">
                  <svg className="size-16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 7h6v6"/><path d="m22 7l-8.5 8.5l-5-5L2 17"/></g></svg>
                  <p className="font-bold">Scalable Growth</p>
                </div>
              </SlidingDiv>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
