export function Navbar() {
    const styles = {
        nav: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 2rem',
            color: 'white',
            height: '4rem',
            
        },
        a: {
            textDecoration: 'none',
            color: 'white',
            margin: '0 1rem',
        },

        logoContainer: {
            display: 'flex',
            alignItems: 'center'
        }
    }

    return (
        <nav style={styles.nav}>
            <div style={styles.logoContainer}> 
            <p style={{ color: 'var(--primary-color)' }}>Hellen Kokach</p>
            </div>
            <div style={{ display: 'flex' }}>
                <a style={styles.a} href="/">Home</a>
                <a style={styles.a} href="#about">About me</a>
                <a style={styles.a} href="#project">Projects</a>
                <a style={styles.a} href="#contact">Contact</a>
            </div>
        
        </nav>
    )
}