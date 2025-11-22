const Country = ({country}) => {
    return <h1>Country</h1>
}
export default Country;

export const getStaticProps = async () => {
    try{
        const api_response = await fetch('http://localhost:3000/api/country')
        const api_response_data = await api_response.json();
        return { props: {
            country: api_response_data

        }};
    }catch (error){
        console.error("❌ Error fetching country data:", error);
        return { props: {
            country: []
        }};
    }
}