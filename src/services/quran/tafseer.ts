import axios from "axios";
import {Tafseer} from "@/types/tafseer";

export const getTafseerList = async () : Promise<Tafseer[]> => {
    const config = {
        url: `http://api.quran-tafseer.com/tafseer/`,
        method: "GET",
        headers:{
            'Content-Security-Policy':'upgrade-insecure-requests'
        }
    };
    try {
        const req = await axios(config);
        return req?.data;
    } catch (error) {
        console.log('❌ getTafseerList', error)
        return [];
    }
};
export const getVerseTafseer = async (tafseer_id: number, sura_number: number, ayah_number: number) => {
    const config = {
        url: `http://api.quran-tafseer.com/tafseer/${tafseer_id}/${sura_number}/${ayah_number}`,
        method: "GET",
        headers:{
            'Content-Security-Policy':'upgrade-insecure-requests'
        }
    };
    try {
        const req = await axios(config);
        return req?.data;
    } catch (error) {
        return error;
    }
};

