import { InputLoginContainer, InputLabel, InputStyle } from './style';

export const InputLogin = ({ label, placeholder, type }) => {
    return (
        <InputLoginContainer>
            {label && <InputLabel>{label}</InputLabel>}
            <InputStyle placeholder={placeholder} type={type} />
        </InputLoginContainer>
    );
};
