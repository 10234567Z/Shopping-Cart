import { useEffect } from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";

export default function Shop() {
    let nodelist = [];
    useEffect(() =>{
        async function FetchThings(){
            try {
                const response = await fetch('https://fakestoreapi.com/products')
                console.log(response)
            } catch (error) {
                throw new Error(error)
            }
        }

        FetchThings()
    } ,[])
    return (
        <>
            <Header />
            <main>
                
            </main>
            <Footer />
        </>
    )
}