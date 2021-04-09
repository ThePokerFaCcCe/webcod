import React, { useState } from "react";
import { TextField, InputAdornment, IconButton, BaseTextFieldProps } from "@material-ui/core";
import {} from "@material-ui/lab";
import { Visibility, VisibilityOff } from "@material-ui/icons";

interface TextInputProps extends BaseTextFieldProps {
	backgroundColor: string;
	showPasswordIcon: boolean;
}

export const TextInput = ({ showPasswordIcon, backgroundColor, ...rest }: TextInputProps) => {
	const [showPassword, setShowPassword] = useState(false);
	const handleShowPasswordClick = () => setShowPassword((oldShowPassword) => !oldShowPassword);
	const style = {
		...rest.style,
		backgroundColor: backgroundColor ?? "#ffffff",
	};

	return (
		<>
			<TextField
				{...rest}
				{...(showPasswordIcon && { type: showPassword ? "text" : "password" })}
				variant={rest.variant || "outlined"}
				style={style}
				InputProps={{
					endAdornment: showPasswordIcon && (
						<InputAdornment position="end">
							<IconButton aria-label="toggle password visibility" onClick={handleShowPasswordClick}>
								{showPassword ? <Visibility /> : <VisibilityOff />}
							</IconButton>
						</InputAdornment>
					),
				}}
			/>
		</>
	);
};
