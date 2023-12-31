'use client'
import Link from "next/link";
import {usePathname} from "next/navigation";

const Pagination = ({data, pagination}: {
    data: any,
    pagination: any
}) => {
    const path = usePathname()
    const generatePagination = (result: any) => {

        const paginationList = [];
        const length = Math.ceil(result.length / 10);
        const maxVisiblePages = 3; // Number of pagination numbers visible before and after the current page

        for (let i = 1; i <= length; i++) {
            if (length <= 2 || Math.abs(pagination - i) <= maxVisiblePages || i === 1 || i === length) {
                paginationList.push(
                    <Link href={`${path}?page=${i}`} title={i.toString()}>{i}</Link>
                );
            } else if (paginationList[paginationList.length - 1]?.key !== 'dots') {
                paginationList.push(<li key="dots">...</li>);
            }
        }

        return paginationList;
    };


    return <>
        {Math.ceil(data.length / 10) > 1 ?
            <div className="pagination">
                <Link className="previous"
                      href={`${path}?page=${(+pagination - 1 >= 1 ) ? +pagination - 1 : pagination }`}
                      title="<"> {"<"} </Link>
                {generatePagination(data)}

                <Link className="next"
                      href={`${path}?page=${(+pagination + 1 <= Math.ceil(data.length / 10) ) ? +pagination + 1 : pagination }`}
                      title="»"> {">"} </Link>
            </div>
            : ''}

    </>
};

export default Pagination;

{/*<div className="pagination"><strong>1</strong><a className=""*/
}
{/*                                                 href="/web/20171027175121/http://safelife.az/index.php/layihlr.html?start=9"*/
}
{/*                                                 title="2">2</a><a className=""*/
}
{/*                                                                   href="/web/20171027175121/http://safelife.az/index.php/layihlr.html?start=18"*/
}
{/*                                                                   title="3">3</a><a*/
}
{/*    className="next"*/
}
{/*    href="/web/20171027175121/http://safelife.az/index.php/layihlr.html?start=9"*/
}
{/*    title="»">»</a><a className="last"*/
}
{/*                      href="/web/20171027175121/http://safelife.az/index.php/layihlr.html?start=18"*/
}
// {/*                      title="Axırıncı">Axırıncı</a></div>


