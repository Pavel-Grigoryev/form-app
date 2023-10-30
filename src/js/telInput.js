import intlTelInput from 'intl-tel-input';
const input = document.querySelector("#form__phone");
export const iti = intlTelInput(input, {
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js",
    initialCountry: "auto",
    geoIpLookup: function(callback) {
        fetch("https://ipapi.co/json")
            .then(function(res) { return res.json(); })
            .then(function(data) { callback(data.country_code); })
            .catch(function() { callback("by"); });
    },
});


