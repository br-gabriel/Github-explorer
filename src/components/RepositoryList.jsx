import { RepositoryItem } from './RepositoryItem'

const repository = {
    name: 'Sem nome',
    description: 'Forms in React',
    link: 'https://github.com/br-gabriel'
}

export function RepositoryList() {
    return (
        <section className="repositoryList">
            <h1>Lista de repositórios</h1>

            <ul>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
            </ul>
        </section>
    )
}