import '../styles/main.css';
import '../styles/reset.css';
import '../styles/index.css';


export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Canine Registration and Management System</title>
                <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet" />
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}
