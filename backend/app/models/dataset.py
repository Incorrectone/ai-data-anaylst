import datetime

from sqlalchemy import ForeignKey
from app.core.database import Base
from sqlalchemy.sql import func
from sqlalchemy import String, DateTime, JSON, Text, Integer
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
from sqlalchemy.orm import relationship

class Dataset(Base):
    __tablename__ = "datasets"

    id: Mapped[int] = mapped_column(primary_key=True)
    filename: Mapped[str] = mapped_column(nullable=False)
    file_path: Mapped[str] = mapped_column(nullable=False)
    columns_metadata: Mapped[dict] = mapped_column(type_=JSON)
    created_date: Mapped[datetime.datetime] = mapped_column(insert_default=func.now())

    jobs = relationship("AnalysisJob", back_populates="dataset")

class AnalysisJob(Base):
    __tablename__ = "analysis_jobs"
    
    id: Mapped[str] = mapped_column(String(255), primary_key=True)
    query: Mapped[str] = mapped_column(Text, nullable=False)
    status: Mapped[str] = mapped_column(String(30), insert_default="PENDING")
    result: Mapped[dict] = mapped_column(type_=JSON)
    dataset_id: Mapped[int] = mapped_column(Integer, ForeignKey("datasets.id"))

    dataset = relationship("Dataset", back_populates="jobs")

