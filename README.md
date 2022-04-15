# radency-task-3

## API:

#### POST /notes

<pre>
request body:
    nothing else but:
{
    name: string (min 2 char),
    category: string (one of [task, random thought, idea, quote]),
    content: string (min 2 char)
}
</pre>

<pre>
response example:
    status: "success",
    code: 201,
    result: {
        id: "625981dd2a20ad338af5fd01",
        name: "Car",
        created: "15/4/2022",
        category: "task",
        content: "from 11/02/2022 to 6/6/2022 buy a new car",
        dates: [ 11/2/2022, 6/6/2022 ],
        "iconUrl": "http://localhost:8080/local_grocery_store.svg",
        "status": "active"
    }
</pre>

#### GET /notes/:id

<pre>
response example:
    status: "success",
    code: 201,
    result: {
        id: "625981dd2a20ad338af5fd01",
        name: "Car",
        created: "15/4/2022",
        category: "task",
        content: "from 11/02/2022 to 6/6/2022 buy a new car",
        dates: [ 11/2/2022, 6/6/2022 ],
        "iconUrl": "http://localhost:8080/local_grocery_store.svg",
        "status": "active"
    }
</pre>

#### PATCH /notes/:id

<pre>
request body:
    nothing else but at least one of this keys:
{
    name: string (min 2 char),
    category: string (one of [task, random thought, idea, quote]),
    content: string (min 2 char),
    status: string (one of [active, archived])
}
</pre>

<pre>
response example:
    status: "success",
    code: 201,
    result: {
        id: "625981dd2a20ad338af5fd01",
        name: "Car",
        created: "15/4/2022",
        category: "task",
        content: "from 11/02/2022 to 6/6/2022 buy a new car",
        dates: [ 11/2/2022, 6/6/2022 ],
        "iconUrl": "http://localhost:8080/local_grocery_store.svg",
        "status": "active"
    }
</pre>

#### DELETE /notes/:id

<pre>
response example:
    status: "success",
    code: 200,
    message: "removed successfull"
</pre>

#### GET /notes/stats

<pre>
response example:
    status: "success",
    code: 201,
    result: [
        {
            "id": "oW8ZpN-",
            "category": "task",
            "active": 4,
            "archived": 2,
            "iconUrl": "http://localhost:8080/icons/local_grocery_store.svg"
        },
        {
            "id": "p_JLwgM",
            "category": "random thought",
            "active": 1,
            "archived": 1,
            "iconUrl": "http://localhost:8080/icons/psychology.svg"
        }
        ...
    ]
</pre>
