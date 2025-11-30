// its microsoft/powerbi so not asking for consent
// https://help.consentmanager.net/books/cmp/page/what-to-do-when-the-automatic-blocking-mode-is-blocking-too-much


export default function Ga4IFrame(){
    return(
        <div className="w-screen h-screen">
        <iframe title="personal_portfolio_ga4_model" width="100%" height="80%" src="https://app.powerbi.com/view?r=eyJrIjoiNGYwZWY5N2QtYmI2NS00MDk5LWFkMTgtYThiZGUxNzI0NDlmIiwidCI6ImY0MTY0ZmVhLWM5MGUtNDZjYi04YTNlLWY4NjZjZTU3NmI0NSJ9&pageName=0c5a9123c1c2e873208a" allowFullScreen={true}></iframe>
        </div>
    )
}