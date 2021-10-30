import { useEffect, useState } from "react"

const ExploreData = () => {

    const [exploreCityData, setExploreData] = useState([]);

    useEffect(() => {
        fetch('https://protected-oasis-73712.herokuapp.com/exploreCityData')
            .then(res => res.json())
            .then(data => setExploreData(data))
    }, [])

    return {
        exploreCityData,

    }
};

export default ExploreData;