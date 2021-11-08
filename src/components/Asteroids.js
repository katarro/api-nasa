import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import "../Styles/Asteroids.css";
import { useForm } from "react-hook-form";

const Asteroids = () => {
  const { register, handleSubmit } = useForm();
  const [asteroids, setAsteroids] = useState({});
  const [loading, setLoading] = useState(true);

  const [initial_date, setInitial_date] = useState();

  useEffect(() => {
    const getPhotos = async () => {
      const key = "SOTesAxrhiguKjl0ZCNfeGgf7RaeBIpBQzzTZGeK";

      try {
        const promise = await fetch(
          `https://api.nasa.gov/neo/rest/v1/feed?start_date=${initial_date.year}-${initial_date.month}-${initial_date.day}&end_date=${initial_date.year}-${initial_date.month}-${initial_date.day}&api_key=${key}`
        );
        //https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=SOTesAxrhiguKjl0ZCNfeGgf7RaeBIpBQzzTZGeK
        const data = await promise.json();
        setAsteroids(data.near_earth_objects);
        setLoading(false);
        //console.log("UseEffect");
      } catch (error) {
        console.log(error);
      }
    };
    getPhotos();
  }, [initial_date]);

  const onSubmit = (data, e) => {
    e.preventDefault();
    setInitial_date({
      year: data.anio_i,
      month: data.mes_i,
      day: data.dia_i,
    });
    console.log("onSubmit");
  };

  return (
    <React.Fragment>
      <div className="flex-content-asteroids">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row mb-5">
            <h2>Desde</h2>
            <div className="col-sm-3">
              <input
                type="number"
                className="form-control"
                placeholder="Año.."
                name="anio_i"
                ref={register}
              />
            </div>
            <div className="col-sm-3">
              <input
                type="number"
                className="form-control"
                placeholder="Mes.."
                name="mes_i"
                ref={register}
              />
            </div>
            <div className="col-sm-3">
              <input
                type="number"
                className="form-control"
                placeholder="Día.."
                name="dia_i"
                ref={register}
              />
            </div>
          </div>

          <div className="button">
            <button className="btn btn-primary btn-md mt-5">Buscar</button>
          </div>
        </form>

        {loading ? (
          <Loader />
        ) : (
          <div id="table">
            <table className="table">
              <thead className="table-light">
                <tr>
                  <th id="table-name">Nombre</th>
                  <th>Velocidad</th>
                  <th>Orbita</th>
                  <th>Diametro</th>
                  <th>Peligroso</th>
                  <th>Distancia</th>
                </tr>
              </thead>

              <tbody>
                {asteroids[
                  initial_date.year +
                    "-" +
                    initial_date.month +
                    "-" +
                    initial_date.day
                ].map((i) => (
                  <tr id="tr" key={i.neo_reference_id}>
                    <td key={i.name}>{i.name}</td>

                    {i.close_approach_data.map((j) => (
                      <td>
                        {Number.parseFloat(
                          j.relative_velocity.kilometers_per_hour
                        ).toFixed()}{" "}
                        Km/h
                      </td>
                    ))}

                    {i.close_approach_data.map((j) => (
                      <td>{j.orbiting_body}</td>
                    ))}

                    <td>
                      {i.estimated_diameter.meters.estimated_diameter_min.toFixed()}{" "}
                      -{" "}
                      {i.estimated_diameter.meters.estimated_diameter_max.toFixed()}{" "}
                      Mts
                    </td>
                    <td>{i.is_potentially_hazardous_asteroid + ""}</td>

                    {i.close_approach_data.map((j) => (
                      <td>
                        {" "}
                        {Number.parseInt(
                          j.miss_distance.kilometers
                        ).toFixed()}{" "}
                        Km{" "}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Asteroids;
