import { useEffect, useRef, useState } from "react";
import styles from "./contacts-map.module.css";

const ROUTE_PATH =
  "M 75 450 C 150 430, 180 380, 255 405 S 350 470, 410 390 S 500 270, 580 300 S 660 345, 710 250";

const TITLE_LINE_1 = "Увидимся";
const TITLE_LINE_2 = "в зале.";

export const ContactsMap = () => {
  const sectionRef = useRef(null);
  const pathRef = useRef(null);
  const animationRef = useRef(null);

  const [started, setStarted] = useState(false);
  const [carPosition, setCarPosition] = useState({
    x: 75,
    y: 450,
    angle: 0,
  });

  const [carArrived, setCarArrived] = useState(false);

  const [typedLine1, setTypedLine1] = useState("");
  const [typedLine2, setTypedLine2] = useState("");

  /* =========================================
     START WHEN SECTION ENTERS VIEWPORT
  ========================================= */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  /* =========================================
     CAR — REAL SVG PATH MOVEMENT
  ========================================= */

  useEffect(() => {
    if (!started || !pathRef.current) return;

    const path = pathRef.current;
    const totalLength = path.getTotalLength();

    let startTime = null;

    const duration = 7000;

    const animateCar = (time) => {
      if (!startTime) {
        startTime = time;
      }

      const elapsed = time - startTime;

      const progress = Math.min(elapsed / duration, 1);

      /*
        Smooth:
        acceleration →
        movement →
        braking
      */

      const eased =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      const distance = totalLength * eased;

      const point = path.getPointAtLength(distance);

      const nextDistance = Math.min(
        distance + 3,
        totalLength
      );

      const nextPoint =
        path.getPointAtLength(nextDistance);

      const angle =
        (Math.atan2(
          nextPoint.y - point.y,
          nextPoint.x - point.x
        ) *
          180) /
        Math.PI;

      setCarPosition({
        x: point.x,
        y: point.y,
        angle,
      });

      if (progress < 1) {
        animationRef.current =
          requestAnimationFrame(animateCar);
      } else {
        setCarArrived(true);
      }
    };

    animationRef.current =
      requestAnimationFrame(animateCar);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [started]);

  /* =========================================
     TYPEWRITER AFTER ARRIVAL
  ========================================= */

  useEffect(() => {
    if (!carArrived) return;

    let cancelled = false;

    const wait = (ms) =>
      new Promise((resolve) =>
        setTimeout(resolve, ms)
      );

    const typeText = async () => {
      /* FIRST LINE */

      for (
        let i = 0;
        i <= TITLE_LINE_1.length;
        i++
      ) {
        if (cancelled) return;

        setTypedLine1(
          TITLE_LINE_1.slice(0, i)
        );

        await wait(105);
      }

      /* PAUSE */

      await wait(250);

      /* SECOND LINE */

      for (
        let i = 0;
        i <= TITLE_LINE_2.length;
        i++
      ) {
        if (cancelled) return;

        setTypedLine2(
          TITLE_LINE_2.slice(0, i)
        );

        await wait(120);
      }
    };

    typeText();

    return () => {
      cancelled = true;
    };
  }, [carArrived]);

  const textFinished =
    typedLine2.length === TITLE_LINE_2.length;

  return (
    <section
      ref={sectionRef}
      className={`
        ${styles.mapSection}
        ${started ? styles.sceneStarted : ""}
        ${carArrived ? styles.carArrived : ""}
      `}
    >
      <div className={styles.container}>

        {/* =====================================
            HEADER
        ===================================== */}

        <div className={styles.header}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />

            НАШ АДРЕС

            <span className={styles.eyebrowDot} />
          </div>

          <h2>
            Теперь ты знаешь,
            <br />
            <span>куда ехать.</span>
          </h2>

          <p>
            Построй маршрут до Bodao Fight Team
            <br />
            и приезжай на тренировку.
          </p>
        </div>

        {/* =====================================
            MAIN SCENE
        ===================================== */}

        <div className={styles.scene}>

          {/* ===================================
              LEFT INFO
          =================================== */}

          <div className={styles.info}>

            <div className={styles.infoTop}>
              <span>LOCATION</span>
              <b>01</b>
            </div>

            <div className={styles.infoMain}>

              <div className={styles.miniTag}>
                <span />
                BODAO FIGHT TEAM
              </div>

              {/* ARRIVAL MESSAGE */}

              <div
                className={`
                  ${styles.arrivalMessage}
                  ${
                    carArrived
                      ? styles.arrivalVisible
                      : ""
                  }
                `}
              >
                <h3>

                  <span className={styles.lineOne}>
                    {typedLine1}
                  </span>

                  <br />

                  <span className={styles.orangeLine}>
                    {typedLine2}
                  </span>

                  <i
                    className={
                      styles.typingCursor
                    }
                  />

                </h3>
              </div>

              {/* DESCRIPTION */}

              <p
                className={`
                  ${styles.arrivalDescription}
                  ${
                    textFinished
                      ? styles.descriptionVisible
                      : ""
                  }
                `}
              >
                Душанбе, Таджикистан.
                <br />
                Точка назначения уже ждёт тебя.
              </p>

              {/* ADDRESS */}

              <div
                className={`
                  ${styles.address}
                  ${
                    textFinished
                      ? styles.addressVisible
                      : ""
                  }
                `}
              >
                <div className={styles.addressIcon}>
                  <span>⌖</span>
                </div>

                <div>
                  <strong>Душанбе</strong>
                  <small>Таджикистан</small>
                </div>
              </div>

              {/* BUTTON */}

              <a
                href="https://maps.google.com/?q=Dushanbe,Tajikistan"
                target="_blank"
                rel="noreferrer"
                className={`
                  ${styles.button}
                  ${
                    textFinished
                      ? styles.buttonVisible
                      : ""
                  }
                `}
              >
                <span>
                  ПОСТРОИТЬ МАРШРУТ
                </span>

                <b>↗</b>
              </a>

            </div>

            <div className={styles.infoBottom}>
              <span>38°34′ N</span>

              <i />

              <span>68°47′ E</span>
            </div>

          </div>

          {/* ===================================
              MAP
          =================================== */}

          <div className={styles.map}>

            <div className={styles.mapGlow} />

            <div className={styles.mapGrid} />

            {/* CITY BLOCKS */}

            <div className={styles.cityBlocks}>
              {Array.from(
                { length: 22 },
                (_, index) => (
                  <span
                    key={index}
                    className={`
                      ${styles.block}
                      ${
                        styles[
                          `block${index + 1}`
                        ]
                      }
                    `}
                  />
                )
              )}
            </div>

            {/* STREETS */}

            {Array.from(
              { length: 8 },
              (_, index) => (
                <div
                  key={index}
                  className={`
                    ${styles.street}
                    ${
                      styles[
                        `street${index + 1}`
                      ]
                    }
                  `}
                />
              )
            )}

            {/* BIG ROADS */}

            {Array.from(
              { length: 3 },
              (_, index) => (
                <div
                  key={index}
                  className={`
                    ${styles.bigRoad}
                    ${
                      styles[
                        `bigRoad${index + 1}`
                      ]
                    }
                  `}
                />
              )
            )}

            {/* =================================
                ROUTE
            ================================= */}

            <svg
              className={styles.routeSvg}
              viewBox="0 0 800 590"
              preserveAspectRatio="none"
            >
              {/* Invisible measurement path */}

              <path
                ref={pathRef}
                className={styles.routeShadow}
                d={ROUTE_PATH}
              />

              {/* Visible route */}

              <path
                className={styles.routePath}
                d={ROUTE_PATH}
              />

              {/* START */}

              <circle
                className={styles.routeStartDot}
                cx="75"
                cy="450"
                r="7"
              />
            </svg>

            {/* =================================
                CAR
            ================================= */}

            <div
              className={`
                ${styles.carWrapper}
                ${
                  started
                    ? styles.carVisible
                    : ""
                }
              `}
              style={{
                left: `${
                  (carPosition.x / 800) * 100
                }%`,
                top: `${
                  (carPosition.y / 590) * 100
                }%`,
                transform: `
                  translate(-50%, -50%)
                  rotate(${carPosition.angle}deg)
                `,
              }}
            >
              <div className={styles.carTrail} />

              <div className={styles.car}>

                <div className={styles.carRoof}>

                  <div
                    className={
                      styles.frontWindow
                    }
                  />

                  <div
                    className={
                      styles.backWindow
                    }
                  />

                </div>

                <div className={styles.carBody}>

                  <div
                    className={
                      styles.carStripe
                    }
                  />

                  <div
                    className={`
                      ${styles.headlight}
                      ${styles.leftLight}
                    `}
                  />

                  <div
                    className={`
                      ${styles.headlight}
                      ${styles.rightLight}
                    `}
                  />

                  <div
                    className={
                      styles.carGrille
                    }
                  />

                </div>

                <div
                  className={`
                    ${styles.wheel}
                    ${styles.wheelLeft}
                  `}
                >
                  <span />
                </div>

                <div
                  className={`
                    ${styles.wheel}
                    ${styles.wheelRight}
                  `}
                >
                  <span />
                </div>

              </div>
            </div>

            {/* =================================
                DESTINATION
            ================================= */}

            <div
              className={`
                ${styles.destination}
                ${
                  carArrived
                    ? styles.destinationVisible
                    : ""
                }
              `}
            >
              <div
                className={
                  styles.destinationRings
                }
              >
                <span />
                <span />
                <span />
              </div>

              <div
                className={
                  styles.destinationCore
                }
              >
                B
              </div>
            </div>

            {/* =================================
                PERSON
            ================================= */}

            <div
              className={`
                ${styles.person}
                ${
                  carArrived
                    ? styles.personVisible
                    : ""
                }
              `}
            >
              <div
                className={
                  styles.personShadow
                }
              />

              <div
                className={
                  styles.personBody
                }
              >

                <div
                  className={
                    styles.personHead
                  }
                />

                <div
                  className={
                    styles.personTorso
                  }
                />

                <div
                  className={
                    styles.personArmLeft
                  }
                />

                <div
                  className={
                    styles.personArmRight
                  }
                >
                  <span />
                </div>

                <div
                  className={
                    styles.personLegLeft
                  }
                />

                <div
                  className={
                    styles.personLegRight
                  }
                />

              </div>
            </div>

            {/* =================================
                BODAO LABEL
            ================================= */}

            <div
              className={`
                ${styles.bodaoLabel}
                ${
                  carArrived
                    ? styles.bodaoVisible
                    : ""
                }
              `}
            >
              <div
                className={
                  styles.bodaoLine
                }
              />

              <span>
                ТЫ ПРИЕХАЛ
              </span>

              <strong>
                BODAO
                <i> FIGHT TEAM</i>
              </strong>
            </div>

            {/* =================================
                LIVE
            ================================= */}

            <div className={styles.live}>
              <span />
              LIVE
            </div>

            {/* =================================
                COMPASS
            ================================= */}

            <div className={styles.compass}>
              <small>N</small>
              <b>↑</b>
            </div>

            {/* =================================
                ZOOM
            ================================= */}

            <div className={styles.zoom}>
              <button type="button">
                +
              </button>

              <button type="button">
                −
              </button>
            </div>

            {/* =================================
                CITY
            ================================= */}

            <div className={styles.cityName}>
              DUSHANBE
            </div>

            <div className={styles.coordinates}>
              38°34′ N / 68°47′ E
            </div>

            <div className={styles.scale}>
              <span />
              <small>500 m</small>
            </div>

          </div>
        </div>

        {/* =====================================
            FOOTER
        ===================================== */}

        <div className={styles.footer}>

          <span>
            МАРШРУТ ПОСТРОЕН
          </span>

          <div
            className={
              styles.footerMiddle
            }
          >
            <i />
            <b>→</b>
            <i />
          </div>

          <span>
            ЖДЁМ ТЕБЯ
          </span>

        </div>

      </div>
    </section>
  );
};
