import Api from "../api/api";

export const ProductsApi=async(props)=>{
    let query=`/search/products/public?per_page=10&parent_category_id=2&page=${props.page}`;
    return await Api.get(query).then((data)=>{
        return {data:data.data.products.data,status:data.status};
    }).catch(function (thrown) {
        console.log(thrown);
        return thrown;
    });
}