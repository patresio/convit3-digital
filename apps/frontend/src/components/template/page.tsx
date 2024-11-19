import Logo from './logo'

interface PageTemplateProps {
  children: React.ReactNode
  className?: string
}

const PageTemplate = (props: PageTemplateProps) => {
  return (
    <div className="flex flex-col items-center py-10 min-h-screen bg-[url('/background.png')] bg-cover">
      <Logo />
      <main
        className={`flex-1 flex flex-col justify-center py-10 container bg-slate-500 ${props.className}`}
      >
        {props.children}
      </main>
    </div>
  )
}

export default PageTemplate
