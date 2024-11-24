// import React from "react";
// import { useMutation, useQuery } from "@tanstack/react-query";
// import api from "../../utils/api";
// import { Formik, Form, Field } from "formik";

// // const handleChange = () => console.log("value changed");
// // const handleBlur = () => console.log("blur handeld");

// const RegisterUser = () => {
//   const mutation = useMutation((newTodo) => {
//     return api.post(["/mini-project/api/auth/register"], newTodo);
//   });

//   function submit(values) {
//     mutation.mutate(values);
//   }

//   return (
//     <div>
//       <Formik
//         initialValues={{ username: "", image: "", password: "" }}

//       >
//         <Form onSubmit={submit}>
//           <input
//             type="username"

// export {AddNewUser}
//             name="username"
//             onChange={handleChange}
//             onBlur={handleBlur}
//             value={values.username}
//           />
//           <input
//             type="image"
//             name="image"
//             onChange={handleChange}
//             onBlur={handleBlur}
//             value={values.image}
//           />
//           <input
//             type="password"
//             name="password"
//             onChange={handleChange}
//             onBlur={handleBlur}
//             value={values.password}
//           />
//           <button type="submit">Submit</button>
//         </Form>
//       </Formik>
//       ;
//     </div>
//   );
// };

// export default RegisterUser;
