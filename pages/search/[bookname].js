import React from 'react';
import Layout from '../../components/Layout';

import {useRouter} from 'next/router';
import About from "../about";
import Book from "../../components/Book";

const Bookname = ( props) => {
    const router = useRouter()
    console.log(props)
    return (
        <Layout>
            당신이 검색한 키워드는 {router.query.bookname} 입니다.
            {
                props.books.map(
                    function(book)
                    {
                        return <Book book={book} />
                    }
                )
            }
        </Layout>
    );
};


Bookname.getInitialProps = async (ctx) => {
    // console.log(ctx.query.bookname)
    const res = await fetch('http://localhost:8080/api/v1/search/'+ctx.query.bookname)
    const json = await res.json()
    // console.log("http:req : "+ json)
    return {
        // books: [{title: "test", isbn:"1234"},{title: "test", isbn:"1234"}]
        books: json
        // json.books
    }
}

export default Bookname;
