import axios from 'axios';

const searchService = {
    searchUser: (body, cb) => {
        const url='https://boiling-coast-31813.herokuapp.com/getProfile';
        axios({
            method: "POST",
            url: url,
            data: body,
        })
        .then(data => {
            if(data && !data.data.error){
                let aux = [];
                aux.push(data.data.business_discovery);
                cb(aux);
            }
        })
        .catch((error)=>{
            console.error(error);
        });
    }
}

export default searchService;