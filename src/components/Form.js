import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import '../Styles/Form.css';
import { Link } from 'react-router-dom';

export default function Form() {
	const { register } = useForm();
	const [formData, setFormData] = useState('2000-01-01');

	return (
		<React.Fragment>
			<form>
				<div className="row mb-5">
					<h2>Ingresa Fecha</h2>
					<div className="col-sm-5">
						<label className="label">AAAA-MM-DD</label>
						<input
							type="text"
							className="form-control"
							placeholder="2001-08-09"
							name="id"
							required="required"
							ref={register}
							onChange={(e) => setFormData(e.target.value)}
						/>
					</div>
				</div>

				<Link to={`/asteroids/${formData}`}>
					<div className="button">
						<button className="btn btn-primary btn-md mt-3">Buscar</button>
					</div>
				</Link>
			</form>
		</React.Fragment>
	);
}
