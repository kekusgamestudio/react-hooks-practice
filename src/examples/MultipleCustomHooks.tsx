import { useCounter, useFetch } from '../hooks';
import { CategoryCard } from './CategoryCard';
import { IsLoading } from './IsLoading';

export const MultipleCustomHooks = () => {

  const categoryId = 1;

  const { counter, increment, decrement } = useCounter(categoryId);
  const { data, isLoading } = useFetch(`https://map-handler.develop.playdigital.com.ar/categories?source=app_modo&ids=${counter}`);

  const {title, square_image} = !!data && data[0];
  // undefined = undefined
  // !undefined = false
  // !!undefinde = true

  return (
    <>
      <h1>Rubros de MODO</h1>
      <hr />
      {
        isLoading ? ( <IsLoading /> ) : ( <CategoryCard title={title} square_image={square_image} counter={counter} />
        )
      }
      <button disabled={ isLoading } className='btn btn-primary' onClick={ () => decrement(1) }>Rubro Anterior</button>
      <button disabled={ isLoading } className='btn btn-primary' onClick={ () => increment(1) }>Próximo Rubro</button>
    </>
  )
}
