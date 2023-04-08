import { ChangeEvent, FormEvent, useReducer, useState } from "react";
import emailjs from "@emailjs/browser";
import validator from "validator";

interface IFormStateType {
	firstName: string;
	lastName: string;
	email: string;
	subject: string;
	message: string;
	isActive: boolean;
}

enum CHANGE_FIELDS {
	FIRSTNAME,
	LASTNAME,
	EMAIL,
	SUBJECT,
	MESSAGE,
	CLEAR_ALL,
}

interface IActionType {
	type: CHANGE_FIELDS;
	paylaod: string;
}

const formInitalState: IFormStateType = {
	firstName: "",
	lastName: "",
	email: "",
	subject: "",
	message: "",
	isActive: false,
};

function checkActive(state: IFormStateType): boolean {
	return (
		state.firstName.length > 1 &&
		state.lastName.length > 1 &&
		state.message.length > 1 &&
		validator.isEmail(state.email)
	);
}

const reducer = (state: IFormStateType, action: IActionType) => {
	switch (action.type) {
		case CHANGE_FIELDS.FIRSTNAME:
			return {
				...state,
				firstName: action.paylaod,
				isActive: checkActive({ ...state, firstName: action.paylaod }),
			};
		case CHANGE_FIELDS.LASTNAME:
			return {
				...state,
				lastName: action.paylaod,
				isActive: checkActive({ ...state, lastName: action.paylaod }),
			};
		case CHANGE_FIELDS.EMAIL:
			return {
				...state,
				email: action.paylaod,
				isActive: checkActive({ ...state, email: action.paylaod }),
			};
		case CHANGE_FIELDS.SUBJECT:
			return { ...state, subject: action.paylaod };
		case CHANGE_FIELDS.MESSAGE:
			return {
				...state,
				message: action.paylaod,
				isActive: checkActive({ ...state, message: action.paylaod }),
			};
		case CHANGE_FIELDS.CLEAR_ALL:
			return { ...formInitalState };
		default:
			throw new Error("unhandeled action type");
	}
};

export default function Contact() {
	const [state, dispatch] = useReducer(reducer, formInitalState);

	const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (!state.isActive) return;
		await emailjs.send(
			process.env.REACT_APP_SERVICE_ID!,
			process.env.REACT_APP_TEMPLATE_ID!,
			{
				name: state.firstName + " " + state.lastName,
				email: state.email,
				subject: state.subject,
				message: state.message,
			},
			process.env.REACT_APP_PUBLIC_KEY!
		);
		console.log("email sent.");
		dispatch({
			type: CHANGE_FIELDS.CLEAR_ALL,
			paylaod: "reduntant",
		});
	};

	return (
		<div className="bg-[#E6DACE] flex flex-col items-center py-10 gap-10">
			<div className="flex items-center gap-4">
				<div className="bg-blue-600 w-4 h-4"></div>
				<h3 className="text-2xl font-semibold">Let's talk</h3>
			</div>
			<div className="p-10 drop-shadow-xl bg-white rounded-3xl">
				<form onSubmit={handleFormSubmit} className="flex flex-col gap-10">
					<div className="flex gap-5">
						<div className="flex flex-col">
							<label htmlFor="">First Name *</label>
							<input
								value={state.firstName}
								onChange={(e: ChangeEvent<HTMLInputElement>) =>
									dispatch({
										type: CHANGE_FIELDS.FIRSTNAME,
										paylaod: e.target.value,
									})
								}
								required
								className="border-b-2 border-gray-600 outline-none p-2 focus:border-blue-500"
								type="text"
							/>
						</div>
						<div className="flex flex-col">
							<label htmlFor="">Last Name *</label>
							<input
								value={state.lastName}
								onChange={(e: ChangeEvent<HTMLInputElement>) =>
									dispatch({
										type: CHANGE_FIELDS.LASTNAME,
										paylaod: e.target.value,
									})
								}
								required
								className="border-b-2 border-gray-600 outline-none p-2 focus:border-blue-500"
								type="text"
							/>
						</div>
					</div>
					<div className="flex flex-col">
						<label htmlFor="">Email *</label>
						<input
							value={state.email}
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								dispatch({
									type: CHANGE_FIELDS.EMAIL,
									paylaod: e.target.value,
								})
							}
							required
							className="border-b-2 border-gray-600 outline-none p-2 focus:border-blue-500"
							type="text"
						/>
					</div>
					<div className="flex flex-col">
						<label htmlFor="">Subject</label>
						<input
							value={state.subject}
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								dispatch({
									type: CHANGE_FIELDS.SUBJECT,
									paylaod: e.target.value,
								})
							}
							className="border-b-2 border-gray-600 outline-none p-2 focus:border-blue-500"
							type="text"
						/>
					</div>
					<div className="flex flex-col">
						<label htmlFor="">Message *</label>
						<textarea
							value={state.message}
							onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
								dispatch({
									type: CHANGE_FIELDS.MESSAGE,
									paylaod: e.target.value,
								});
							}}
							required
							style={{ resize: "none" }}
							name=""
							id=""
							cols={10}
							rows={10}
							className="border-b-2 border-gray-600 outline-none focus:border-blue-500"
						></textarea>
					</div>
					<button
						disabled={!state.isActive}
						className={`px-5 py-2 self-start text-white tracking-wider rounded-full ${
							state.isActive
								? "hover:-translate-y-1 duration-500 active:translate-y-1 bg-blue-600"
								: "bg-gray-400"
						}`}
					>
						SEND
					</button>
				</form>
			</div>
		</div>
	);
}
