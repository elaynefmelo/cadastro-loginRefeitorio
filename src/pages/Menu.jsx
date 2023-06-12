import 'tailwindcss/tailwind.css';


function Menu() {
return (
  <>
  <div>
    <body className='bg-gray-300'>
      <div className='sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto 
      text-center bg-gradient-to-r from-green-400 to-teal-500'>
        <div className='text-gray-100 text-xl'>
          <div className='p-2.5 mt-1 flex items-center justify-center'>
          <img src="./imagens/logo_refeitorio.png" alt="Logo Refeitório" className="object-cover w-48 h-48"/>
          

          </div>
        </div>

      </div>
    </body>
  </div>
  
  </>
);
}

export default Menu;

