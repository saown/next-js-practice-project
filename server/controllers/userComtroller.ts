export const getCountryData = async (req, res) => {
    try {
        const apiResponse = await fetch('http://rwapi.py:8000/api/country')
        if (!apiResponse.ok){
            throw new Error(`External API returned status ${apiResponse.status}`)
        }
        const apiResponseData = await apiResponse.json();
        res.json(apiResponseData);
    }catch (error: any){
        res.status(500).json({
            status:false,
            message: `Failed to: ${error.message}`
        })
    }
}