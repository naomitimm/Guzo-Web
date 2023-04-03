import { useState, useEffect } from "react";

const useFetch = (url) => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const abortController = new AbortController();

		fetch(url, { signal: abortController.signal })
			.then((res) => {
				if (!res.ok) {
					throw Error("Could not fetch the data");
				}
				return res.json();
			})
			.then((data) => {
				setData(data);
				setIsLoading(false);
				setError(null);
			})
			.catch((error) => {
				if (error.name === "AbortError") {
					console.log("Fetch Aborted");
				} else {
					setIsLoading(false);
					setError(error.message);
				}
			}, 1000);

		return () => abortController.abort();
	}, [url]);

	return { data, isLoading, error };
};

export default useFetch;
