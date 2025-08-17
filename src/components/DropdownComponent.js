import { useState } from 'react';
import { View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import styles from '../style/style';
const DropdownComponent = (
    { data,
        value,
        onChange,
        placeholder = "Select..",
        labelField = "label",
        valueField = "value",
        style, }
) => {
    const [isFocus, setIsFocus] = useState(false);

    return (
        <View style={styles.dropDownContainer}>
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }, style]}
                placeholderStyle={styles.textStyle}
                selectedTextStyle={styles.textStyle}
                inputSearchStyle={styles.textStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={300}
                labelField={labelField}
                valueField={valueField}
                placeholder={!isFocus ? placeholder : '...'}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    onChange(item.value);
                    setIsFocus(false);
                }}

            />
        </View>
    );
};

export default DropdownComponent;
