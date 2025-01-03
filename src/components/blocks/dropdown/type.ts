interface OptionProps{
    key:string,
    label:string
}
export interface DropDownProp{
    
        options:OptionProps[];
        defaultSelectedKeys: string;
        selectStyles?: string;
        insideStyles?: string;
        selectedItemRadius?: string; 
        selectContainerStyles?:string
      
}