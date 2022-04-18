import axios from 'axios';

export const GlobalVariable = Object.freeze({
    // BASE_API_URL: `https://www.drsmmart.com/ecommerce/public/v1/api/web/`,
    //BASE_API_URL: `http://localhost:8000/v1/api/web/`,
    BASE_API_URL: `https://api.nystore.pk/public/v1/api/web/`,
});

class AjaxService {

    fileUpload() {
        return GlobalVariable.BASE_API_URL + 'file';
    }


    generateUrl(url) {
        return GlobalVariable.BASE_API_URL + url;
    }

    get(url, data) {
        return this.executeRequest(url, data, 'GET');
    }

    post(url, data) {
        return this.executeRequest(url, data, 'POST');
    }

    put(url, data) {
        return this.executeRequest(url, data, 'PUT');
    }

    delete(url) {
        return this.executeRequest(url, null, 'DELETE');
    }

    async executeRequest(url, data, type) {

        let headers = {
            'Accept': 'application/json',
            //'ContentType' : `application/json`
        };

        if (process.browser) {
            if (localStorage != undefined) {
                const state = localStorage.getItem("state");
                let storage = JSON.parse(state);

                // console.log(storage);

                if (storage !== null && storage.auth != null && storage.auth.token != null) {
                    headers = {
                        Accept: "application/json",
                        Authorization: `Bearer ${storage.auth.token}`,
                    }
                }
            }
        }

        const uri = this.generateUrl(url);

        let options = {
            method: type,
            url: uri,
            headers: headers,
            data: null,
        }

        if (type === 'GET') {
            options.params = data;
        } else if (type === 'POST' || type === 'PUT') {
            options.data = data;
        } else {
            delete options.data;
        }

        return axios(options).then(response => {
            return response.data;
        }).catch(function (error) {
            console.log(error);
        });
    }
}

const ajaxService = new AjaxService();

export default ajaxService;