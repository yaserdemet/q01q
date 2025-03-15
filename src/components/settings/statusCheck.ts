export const StatusCheck = (value : number) => {
    if (value < 20) {
        return "text-red-500";
    } else if (value >= 20 && value < 50) {
        return "text-yellow-500";
    } else if (value >= 50 && value < 80) {
        return "text-orange-500";
    } else if (value >= 80) {
        return "text-green-500";
    } else {
        return "unknown";
    }
}
interface SettingProps {
    id : number;
    name : string;
    value : string;
}
export const settingsValue : SettingProps[] = [{
    id : 1,
    name : "Language",
    value : navigator.language
},
{
    id : 3,
    name : "User Agent",
    value : navigator.userAgent
},
{
    id : 4,
    name : "Online Status",
    value : navigator.onLine ? "Online" : "Offline"
}
,{
    id : 5,
    name : "Cookies Enabled",
    value : navigator.cookieEnabled ? "Enabled" : "Disabled"
},
{
    id : 6, 
    name : "Hardware Concurrency",
    value : navigator.hardwareConcurrency.toString()
},
{
    id : 7,
    name : "Language Preferences",
    value : navigator.languages.join(", ")
},
{
    id : 8,
    name : "Product",
    value : navigator.product
},
{
    id : 9,
    name : "Vendor",
    value : navigator.vendor
},


]