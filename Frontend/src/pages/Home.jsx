import { useState } from 'react';
import usePredict from '../hooks/usePredict';

function Home() {
	const [selectedFile, setSelectedFile] = useState(null);
	const [result, setResult] = useState(null);
	const [error, setError] = useState('');
	const { predict, loading } = usePredict();
	const outputText = result?.result || JSON.stringify(result);

	const handleSubmit = async (event) => {
		event.preventDefault();
		setError('');
		setResult(null);

		if (!selectedFile) {
			setError('Please choose an image first.');
			return;
		}

		const formData = new FormData();
		formData.append('image', selectedFile);

		try {
			const data = await predict(formData);
			setResult(data);
		} catch (submitError) {
			setError(submitError?.response?.data?.error || 'Prediction failed.');
		}
	};

	return (
		<main className="container py-5" style={{ maxWidth: '640px' }}>
			<h1 className="h3 mb-4 text-center">Image Classifier</h1>

			<div className="card">
				<div className="card-body">
					<form onSubmit={handleSubmit} className="d-grid gap-3">
						<input
							type="file"
							accept="image/*"
							className="form-control"
							onChange={(event) => setSelectedFile(event.target.files?.[0] || null)}
						/>

						<button type="submit" disabled={loading} className="btn btn-primary">
							{loading ? 'Sending...' : 'Send'}
						</button>
					</form>

					{selectedFile && <p className="mt-3 mb-0 text-muted">Selected: {selectedFile.name}</p>}

					{error && <div className="alert alert-danger mt-3 mb-0">{error}</div>}

					{result && (
						<section className="mt-3">
							<h2 className="h6">Output</h2>
							<p className="mb-0" style={{ whiteSpace: 'pre-wrap' }}>{outputText}</p>
						</section>
					)}
				</div>
			</div>
		</main>
	);
}

export default Home;
