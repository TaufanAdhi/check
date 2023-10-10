// const arr = ['aku','suka','kamu'];

// let [a,s,k] = arr;

// [a,s,k] = [k,s,a]

// console.log(a)


// const obj = { nama:'taufan',umur:18,jurusan:'analisis Kimia'}

// const {nama : n,umur : u,jurusan : j} = obj

// console.log(n + u + j)

const student = {
    name: "Alice",
    age: 22,
    major: "Computer Science",
    grades: [90, 85, 92, 88, 78],
  };

function contain({name,age,major,grades}){
    
    function tampil(){
        return name
    }

    function rata(){

        let nilai = grades.reduce((a,b) => a + b)
        nilai /= grades.length;
        return nilai
    }

    function pesan(){

        return `hai ${name} untuk nilai rata rata kamu adalah ${rata()}`

    }
    return {tampil,rata,pesan}
}

const coba = contain(student)

// let i = coba.tampil();

console.log(coba.pesan())







