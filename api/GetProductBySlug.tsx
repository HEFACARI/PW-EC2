import { useState, useEffect } from "react";

export function useGetProductBySlug(slug: string | string[] | undefined) {
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!slug || typeof slug !== "string") {
            setLoading(false);
            setError("Slug no proporcionado o inválido");
            return;
        }

        const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?filters[slug][$eq]=${slug}&populate=*`;

        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await fetch(url);
                const json = await res.json();
                setResult(json.data);
            } catch (err: any) {
                setError("Error al obtener el producto");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [slug]);

    return { loading, result, error };
}
