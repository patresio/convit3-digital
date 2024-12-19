import Image from 'next/image';
const Proccessing = () => {
  return ( 
    <div className='flex-1 flex justify-center items-center h-96'>
      <Image src="/processando.gif" alt="Loading" width={60} height={60} />
    </div>
   );
}
 
export default Proccessing;