export default function Footer(){
    const currentDate = new Date();

    return(
        <footer className="text-center p-8 mt-10">
            <p className="text-2xl font-bold pb-5" style={{ color: 'var(--primary-color)' }}>Hellen Kokach</p>
            <p>© {currentDate.getFullYear()} by Hellen Kokach. Design inspiration from <a className="text-pink-300" href='https://www.figma.com/community/file/1084469493663635659'> 
            Isaiah Ernest Portfolio Design</a> 
            </p>


        </footer>
    )
}