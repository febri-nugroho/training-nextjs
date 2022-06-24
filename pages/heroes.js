import { useState } from 'react';
import Link from "next/link";
import { person } from "../data";

export default function Heroes(){
	const [datalist, setData] = useState();
	const callApi = async() => {
		try {
			const res = await fetch(
				`api/avatar`
			);
			const data = await res.json();
			setData(data);
		} catch (error) {
			console.log(error);
		}
	}

    return (
		<>
		<button onClick={callApi}> Create Api </button>

        <div>
			<h2>Show Data</h2>
			<ol>
				{ datalist && datalist.map((data) =>
					<li key={ data.id }>
						<Link href={{pathname: `/personal/${data.allies}`, 
								query: {
									name: data.name,
									position: data.position,
									affiliation: data.affiliation,
								}}}
								as={`/personal/${data.allies}`}>
							<a>{ data.name }</a>
						</Link>
					</li>
				)}
				
			</ol>

            <h1>List Heroes</h1>
            <ol>
				{ person.map((persons) =>
				<li key={ persons._id }>
				    <Link href={{pathname: `/personal/${persons.allies}`, 
								query:{ 
									name: persons.name, 
									gender: persons.gender, 
									position: persons.position, 
									profession: persons.profession,
									affiliation: persons.affiliation,
									imageUrl: persons.photoUrl }}} 
								as ={`/personal/${persons.allies}`}>
								<a>{ persons.name }</a>
							</Link>
						</li>
					)}
			</ol>

			<style jsx>{`
				ol {
					counter-reset: li; 
					list-style: none; 
					padding: 0;
					text-shadow: 0 1px 0 rgba(255,255,255,.5);
					margin-left: 5%;
					margin-right: 20%;
				  }
				  
				  ol a {
					position: relative;
					display: block;
					padding: .4em .4em .4em 2em;
					margin: .5em 0;
					background: #DAD2CA;
					color: #444;
					text-decoration: none;
					border-radius: .3em;
					transition: .3s ease-out;
				  }
				  
				  ol a:hover { background: #E9E4E0; }
				  ol a:hover:before { transform: rotate(360deg); }
				  ol a:before {
					content: counter(li);
					counter-increment: li;
					position: absolute;
					left: -1.3em;
					top: 50%;
					margin-top: -1.3em;
					background: #f9dd94;
					height: 2em;
					width: 2em;
					line-height: 2em;
					border: .3em solid #fff;
					text-align: center;
					font-weight: bold;
					border-radius: 2em;
					transition: all .3s ease-out;
				  }
			`}</style>
        </div>
		</>
    )
}