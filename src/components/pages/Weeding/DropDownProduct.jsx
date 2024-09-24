import React,{useState} from 'react';
import { Typography, Button, Box, Card } from "@mui/material";

const DropDownProduct = () => {
    const [showOptions, setShowOptions] = useState(false)
    const showOption = ()=> {
        setShowOptions(!showOptions)
    }
    
    const onBlur = ()=> {
        setShowOptions(false)
    }
    
    const onMouseDown = ()=> {
        setShowOptions(false)
    }

  return (
<Box>

</Box>
  )
}

export default DropDownProduct
