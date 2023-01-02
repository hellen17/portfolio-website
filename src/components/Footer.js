export default function Footer(){
    const currentDate = new Date();

    return(
        <footer className="text-center p-8 mt-10">
            <p className="text-2xl font-bold pb-5" style={{ color: 'var(--primary-color)' }}>Hellen Kokach</p>
            <p>© {currentDate.getFullYear()} by Hellen Kokach. Design inspiration from <a href='#'>Link</a></p>


        </footer>
    )
}