import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router-dom';
import '../App.css';

class UserCredentials extends Component {

	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			username_validation: '',
			password_validation: ''
		};
	}

	handleEmailChange = (e) => {
		let username = e.target.value;
		this.setState({ username });
	};

	handlePasswordChange = (e) => {
		let password = e.target.value;
		this.setState({ password });
	};

	handleSubmit = (e) => {
		e.preventDefault();

		// handling entering the test here
		let getData = this.props.getData;
		if (this.state.username === getData.username && this.state.password === getData.password) {
			this.props.handleBooleans();
		}
		else {

			// user credentials fields validations

			let username_validation = '';
			let password_validation = '';

			this.setState({ username_validation, password_validation });

			if (this.state.username !== '' && this.state.username !== getData.username) {
				username_validation = 'Incorrect username!';
				this.setState({ username_validation });
			}
			else if (this.state.username === '') {
				username_validation = 'Kindly enter your username!';
				this.setState({ username_validation });
			}

			if (this.state.password !== '' && this.state.password !== getData.password) {
				password_validation = 'Incorrect password!';
				this.setState({ password_validation });
			}
			else if (this.state.password === '') {
				password_validation = 'Kindly enter your password!';
				this.setState({ password_validation });
			}
		}
	};

	render() {

		let error_div_1 = '';
		let error_div_2 = '';
		const { loggingIn } = this.props;

		if (this.state.username_validation !== '') {
			error_div_1 = (
				<h5 className="font_family font_15 font_weight_400 left_align color_red margin_10_0">
					{this.state.username_validation}
				</h5>
			);
		}

		if (this.state.password_validation !== '') {
			error_div_2 = (
				<h5 className="font_family font_15 font_weight_400 left_align color_red margin_10_0">
					{this.state.password_validation}
				</h5>
			);
		}

		// User credential fields are added

		return (
			<div>
				<div className="user_cred center_align get_box_shadow background_white">
					<div className="padding_100">
						<h3 className="font_family font_26 color_teal margin_bottom_30 font_weight_900 is_capitalized">
							Simple Quiz
						</h3>
						<h3 className="font_family font_16 color_teal margin_bottom_30 font_weight_900">
							Answer 10 questions in 3 minutes
						</h3>
						<h5 className="font_family font_16 font_weight_900 left_align color_teal">
							User Credentials
						</h5>
						<form onSubmit={this.handleSubmit}>
							<div className="left_align">
								<TextField
									type="text"
									value={this.state.username}
									hintText="Enter username"
									className="login_field"
									onChange={this.handleEmailChange}
								/>
							</div>
							{error_div_1}
							<div className="left_align">
								<TextField
									type="password"
									value={this.state.password}
									hintText="Enter password"
									className="login_field"
									onChange={this.handlePasswordChange}
								/>
							</div>
							{error_div_2}
							<div className="left_align get_margin_103">
								<button
									type="submit"
									className="light_violet font_family"
									onClick={this.handleSubmit}
								>
									Enter Test
								</button>
								{loggingIn &&
									<img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
								}
								<Link to="/register" className="btn btn-link">Register</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default UserCredentials;

