interface CategoryProps{
    params: {
        categories: string [],
        seachParams?: string 
    }
}

export default function Category(props: CategoryProps){
    const { categories } = props.params; 
    throw new Error('Error: Boom!')


    
    return(
        <h1> Categoria dinamica: {categories} </h1>
    )
}