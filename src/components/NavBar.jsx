import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuItem, MenuList, Flex, Box, Spacer} from '@chakra-ui/react'
function NavBar() {
  return (
    <div>
        <h3>brad</h3>
        NavBar
        
         <Flex>
              <Box p='4' >
                Box 1
            </Box>
             <Spacer />
            <Box p='4' >
               <CartWidget/>  
             </Box>
         </Flex>
        
        <Menu>
    <MenuButton >
    Productos
     </MenuButton>
  <MenuList>
    <MenuItem>Hombre</MenuItem>
    <MenuItem>Mujer</MenuItem>
    <MenuItem>Accesorios</MenuItem>
  </MenuList>
</Menu>
        

    </div>
  )
}

export default NavBar