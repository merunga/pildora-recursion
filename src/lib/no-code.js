const searchParams = new URLSearchParams(window.location.search);
export default !!searchParams.get('no-code');
