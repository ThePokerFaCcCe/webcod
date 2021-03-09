import { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../store/user";
import { Formik, Form, Field, FormikHelpers } from "formik";
import { Button, TextField } from "@material-ui/core";
import ShowPasswordIcon from "../../components/ShowPasswordIcon/ShowPasswordIcon";
import { PageTitle } from "../../components/StyledComponents/StyledComponents";
import "./Login.scss";

interface LoginFormValues {
	username: string;
	password: string;
}

const Login = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	const [showPassword, setShowPassword] = useState(false);

	const onFormSubmit = ({ username, password }: LoginFormValues, { setSubmitting }: FormikHelpers<LoginFormValues>) => {
		dispatch(logIn(username, password, () => setSubmitting(false)));
	};

	return (
		<>
			{user.logged && <Redirect to={"/"} />}
			<PageTitle>Login</PageTitle>
			<section className="login">
				<Formik
					initialValues={
						{
							username: "",
							password: "",
						} as LoginFormValues
					}
					onSubmit={onFormSubmit}
				>
					{({ isSubmitting }) => (
						<Form>
							<Field name="username" type="input" autoFocus={true} variant="outlined" label="Username" className="input" color="primary" as={TextField} />
							<Field
								name="password"
								type={showPassword ? "text" : "password"}
								variant="outlined"
								label="Password"
								className="input"
								color="primary"
								InputProps={{
									endAdornment: <ShowPasswordIcon showPassword={showPassword} setShowPassword={setShowPassword} />,
								}}
								as={TextField}
							/>
							<Button disabled={isSubmitting} className="submit" type="submit" variant="contained" size="large" color="primary">
								Sign in
							</Button>
						</Form>
					)}
				</Formik>
			</section>
		</>
	);
};

export default Login;
