interface ISearchFormBoxProps {
    children: React.ReactNode;
    className?: string;
}
const SearchFormBox = (props: ISearchFormBoxProps) => {
    return (
        <div
            className={`searchForm-box flex ${props.className && props.className ? props.className : null
                }`}
        >
            {props.children}
        </div>
    )
}
export default SearchFormBox